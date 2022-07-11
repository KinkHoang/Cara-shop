import { bannerCase } from "../constants";

const initialState = {
  bannerList: {
    data: [],
    load: false,
    error: "",
  },
};

export default function bannerReducer(state = initialState, action) {
  switch (action.type) {
    case bannerCase.req: {
      return {
        bannerList: {
          ...state.bannerList,
          load: true,
        },
      };
    }
    case bannerCase.success: {
      const { data } = action.payload;
      return {
        bannerList: {
          ...state.bannerList,
          data,
          load: false,
        },
      };
    }
    case bannerCase.fail: {
      const { error } = action.payload;
      return {
        bannerList: {
          ...state.bannerList,
          error,
          load: false,
        },
      };
    }
    default: {
      return state;
    }
  }
}
