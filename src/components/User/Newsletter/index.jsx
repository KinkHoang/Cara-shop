import React from "react";
import history from "../../../utils/history";
import { Button, Form, Input, message, Space } from 'antd';
import "./styles.scss";

const Newsletter = () => {
    const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Bạn sẽ nhận được email từ shop!');
  };

  const onFinishFailed = () => {
    message.error('Email không đúng!');
  };

    return (
        
        <>
        
            <section id="newsletter" className="section-p1 section-m1">
                
                <div className="newstext">
                    <h4>Đăng Ký để nhận email</h4>
                    <p>
                    Nhận tin tức mới nhất từ shop và 
                        <span> các ưu đãi đặc biệt.</span>
                    </p>
                </div>
                <Form className="form"
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        name="email"
                        rules={[{ required: true }, { type: 'email', warningOnly: true }, { type: 'string'}]}
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                        <Button type="primary" htmlType="submit" className="normal">
                            Gửi
                        </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </section>
        </>
    );
};

export default Newsletter;
