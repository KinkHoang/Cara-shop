import { put, takeEvery } from "redux-saga/effects";
import { loginCase, registerCase, updateUserCase } from "../constants";
import authApi from "../../API/authApi";
import { notification } from "antd";
import history from "../../utils/history";
import PATH from "../../constants/path";

function* registerSaga(action) {
  const params = action.payload;
  try {
    const result = yield authApi.register(params);
    yield put({
      type: registerCase.sucess,
      payload: {
        data: result.data,
      },
    });
    notification.success({
      message: "Đăng ký tài khoản thành công!",
    });
    yield history.push(PATH.LOGIN);
  }
   catch (e) {
    notification.warning({
      message: "Email đã tồn tại!",
    }
    );
    yield put({
      type: registerCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

function* loginSaga(action) {
  const params = action.payload;
  try {
    const result = yield authApi.login(params);
    if (result.user.role === "disable") {
      notification.warning({
        message: "Tải khoản này đã bị chặn!",
      });
    } else {
      notification.success({
        message: "Đăng nhập thành công!",
      });
      yield put({
        type: loginCase.sucess,
        payload: {
          data: result,
        },
      });
      if (result.user.role !== "user") {
        yield history.push(PATH.HOME);
      } else {
        yield history.push(PATH.HOMEADMIN);
      }
    }
  } catch (e) {
    notification.warning({
      message: "Sai mật khẩu hoặc email!",
    });
    yield put({
      type: loginCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

function* updateUserSaga(action) {
  const {
    id,
    fullName,
    gender,
    accessToken,
    birthDay,
    phone,
    nickName,
    password,
  } = action.payload;

  try {
    const result = yield authApi.updateUser(
      { id, accessToken },
      { fullName, gender, birthDay, phone, nickName, password }
    );
    yield put({
      type: updateUserCase.sucess,
      payload: {
        data: result,
      },
    });
  } catch (e) {
    yield put({
      type: updateUserCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(registerCase.req, registerSaga);
  yield takeEvery(loginCase.req, loginSaga);
  yield takeEvery(updateUserCase.req, updateUserSaga);
}
