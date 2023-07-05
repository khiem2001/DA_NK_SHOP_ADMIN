import { Button, Modal, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
interface Props {
  isOpen?: any;
  onOk?: any;
  onCancel?: any;
  prop?: any;
}
const { Text, Title } = Typography;
const ModalConfirm = ({ isOpen, prop, onOk, onCancel }: Props) => {
  const { title, content, isTitleColor } = prop;
  const { t } = useTranslation();
  return (
    <Modal open={isOpen} footer={null} title="" width="446px" closeIcon={<></>} className="flex flex-col">
      <div style={{ position: 'relative', padding: '10px' }}>
        <Title level={5} className=" modal-confirm-title" style={{ color: `${isTitleColor ? '#bd2648' : '#23262F'}` }}>
          {t(title)}
        </Title>
        <div className=" modal-confirm-content mb-8">
          <Text className="text-center">{t(content)}</Text>
        </div>
        <div className=" float-right modal-confirm-button">
          <Space size="middle">
            <Button className="btn btn-minus" onClick={onCancel}>
              Không
            </Button>
            <Button className="btn btn-add" onClick={onOk}>
              Có
            </Button>
          </Space>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
