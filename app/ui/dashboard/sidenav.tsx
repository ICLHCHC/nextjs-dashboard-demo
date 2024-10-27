import Link from 'next/link';  // 导入 Next.js 的 Link 组件，用于实现客户端导航
import NavLinks from '@/app/ui/dashboard/nav-links';  // 导入自定义的导航链接组件
import AcmeLogo from '@/app/ui/acme-logo';  // 导入 Acme 的 Logo 组件
import { PowerIcon } from '@heroicons/react/24/outline';  // 导入 Power 图标组件

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">  {/** 使用 Flexbox 布局，设置全高的垂直排列*/}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"  // 样式化链接
        href="/"  // 指向主页
      >
        <div className="w-32 text-white md:w-40">  {/**Logo 容器，设置宽度和文字颜色 */}
          <AcmeLogo />  {/**渲染 Acme 的 Logo */}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">  {/** 导航区域*/}
        <NavLinks />  {/**渲染导航链接 */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>  {/** 占位 div，只有在中等及以上屏幕上可见*/}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">  {/** 登录/登出按钮*/}
            <PowerIcon className="w-6" />  {/** Power 图标*/}
            <div className="hidden md:block">Sign Out</div>  {/**在中等及以上屏幕上显示“登出”文本 */}
          </button>
        </form>
      </div>
    </div>
  );
}
