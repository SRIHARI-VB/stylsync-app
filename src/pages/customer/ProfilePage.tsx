import React from "react";
import {
  ConfigProvider,
  ThemeConfig,
  Button,
  Collapse,
  Typography,
  Card,
  Divider,
} from "antd";
import {
  EditOutlined,
  CaretRightOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  SettingOutlined,
  LockOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import BottomNavBar from "../../components/BottomNavBar";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const config: ThemeConfig = {
  token: {
    colorPrimary: "#9F57F9",
    colorPrimaryBg: "#9D9D9D",
  },
};

const ProfilePage = () => {
  return (
    <ConfigProvider theme={config}>
      <div className="relative h-screen bg-white">
        <div className="flex flex-col px-6 pt-3 pb-16 gap-4">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <div className="flex flex-col items-center">
              <Title level={2} style={{ fontFamily: "Questrial, sans-serif" }}>
                User Name
              </Title>
              <Text
                type="secondary"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                user.email@example.com
              </Text>
              <Button
                icon={<EditOutlined />}
                style={{ marginTop: 10 }}
                type="link"
              >
                Edit
              </Button>
            </div>
          </div>

          <Collapse
            defaultActiveKey={["1", "2", "3"]}
            expandIconPosition="right"
            className="w-full"
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel
              header={
                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-lg"
                    style={{ fontFamily: "Questrial, sans-serif" }}
                  >
                    My Orders (3)
                  </span>
                </div>
              }
              key="1"
            >
              <Card
                title={
                  <div>
                    <ShoppingCartOutlined /> Order 1
                  </div>
                }
                extra={<Text>Details</Text>}
                style={{ marginBottom: 10 }}
              >
                <Text>Order placed on 15th July, 2024</Text>
                <Divider />
                <Text>Total: $150</Text>
                <br />
                <Text>Status: Shipped</Text>
              </Card>
              <Card
                title={
                  <div>
                    <ShoppingCartOutlined /> Order 2
                  </div>
                }
                extra={<Text>Details</Text>}
                style={{ marginBottom: 10 }}
              >
                <Text>Order placed on 10th July, 2024</Text>
                <Divider />
                <Text>Total: $200</Text>
                <br />
                <Text>Status: Delivered</Text>
              </Card>
              <Card
                title={
                  <div>
                    <ShoppingCartOutlined /> Order 3
                  </div>
                }
                extra={<Text>Details</Text>}
                style={{ marginBottom: 10 }}
              >
                <Text>Order placed on 5th July, 2024</Text>
                <Divider />
                <Text>Total: $120</Text>
                <br />
                <Text>Status: Processing</Text>
              </Card>
            </Panel>
            <Panel
              header={
                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-lg"
                    style={{ fontFamily: "Questrial, sans-serif" }}
                  >
                    Delivery Address
                  </span>
                </div>
              }
              key="2"
            >
              <Card
                title={
                  <div>
                    <HomeOutlined /> Address 1
                  </div>
                }
                style={{ marginBottom: 10 }}
              >
                <Text>123 Main Street, Cityville, CA 12345</Text>
                <Divider />
                <Text>Home Address</Text>
              </Card>
              <Card
                title={
                  <div>
                    <HomeOutlined /> Address 2
                  </div>
                }
                style={{ marginBottom: 10 }}
              >
                <Text>456 Oak Avenue, Suburbia, CA 67890</Text>
                <Divider />
                <Text>Office Address</Text>
              </Card>
            </Panel>
            <Panel
              header={
                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-lg"
                    style={{ fontFamily: "Questrial, sans-serif" }}
                  >
                    Settings
                  </span>
                </div>
              }
              key="3"
            >
              <Card
                title={
                  <div>
                    <LockOutlined /> Password
                  </div>
                }
                style={{ marginBottom: 10 }}
              >
                <Text>Change your account password here</Text>
              </Card>
              <Card
                title={
                  <div>
                    <AlertOutlined /> Theme
                  </div>
                }
                style={{ marginBottom: 10 }}
              >
                <Text>Select your preferred theme color and style</Text>
              </Card>
            </Panel>
          </Collapse>
        </div>
        <BottomNavBar name="Profile" />
      </div>
    </ConfigProvider>
  );
};

export default ProfilePage;
