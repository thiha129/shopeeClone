import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function UserSideNav() {
  return (
    <div>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-black/10'>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134004-7ra0g-m7g9jmhdglq466_tn'
            alt=''
            className='h-full w-full object-cover'
          />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>thihoang757</div>
          <Link to={path.profile} className='flex items-center capitalize text-gray-500'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: 4 }}
            >
              <path
                d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                fill='#9B9B9B'
                fillRule='evenodd'
              ></path>
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className='mt-7'>
        <Link to={path.profile} className='flex items-center capitalize text-orange transition-colors'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
              className='w-full h-full'
            />
          </div>
          Tài khoản của tôi
        </Link>
        <Link to={path.changePassword} className='mt-4 flex items-center capitalize text-orange transition-colors'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
              className='w-full h-full'
            />
          </div>
          Đổi mật khẩu
        </Link>
        <Link to={path.historyPurchase} className='mt-4 flex items-center capitalize text-gray-600 transition-colors'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078'
              alt=''
              className='w-full h-full'
            />
          </div>
          Đơn mua
        </Link>
      </div>
    </div>
  )
}
