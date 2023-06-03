import useMessageStore, { MessageStore } from '@/store/useMessageStore';
import Avatar from '../Avatar';
import { useQueryClient } from '@tanstack/react-query';

const UserBox = ({ props }: any) => {
  const { setConversationData, conversation } = useMessageStore(store => store) as MessageStore;
  const queryClient = useQueryClient();

  const newMembers = props?.members?.filter((obj: any) => obj !== null);
  const imageUrl = process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + newMembers[0]?.avatarId?.url;
  const handleClick = () => {
    setConversationData({
      _id: props._id,
      nameUser: newMembers[0].fullName,
      avatarUrl: `${newMembers[0]?.avatarId?.url ? imageUrl : '/images/placeholder.jpg'}`
    });
    queryClient.invalidateQueries(['listMessage']);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`
        w-full
        relative
        flex
        items-center
        space-x-3
        py-4
        px-7
        hover:bg-neutral-100
        rounded-md
        transition
        cursor-pointer
       
        ${props._id === conversation?._id ? 'bg-sky-100' : 'bg-white'}
      `}
      >
        <Avatar props={{ image: `${newMembers[0]?.avatarId?.url ? imageUrl : '/images/placeholder.jpg'}` }} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-900">{newMembers[0].fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
