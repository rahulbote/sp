import Link from "next/link";


const Navbar = () => {
    const nav = [
        {
            lable:"Home",
            href: '/'

        },
        {
            lable:"Services",
            href: '/services'

        },
        {
            lable:"Contact",
            href: '/Contact'

        },
        {
            lable:"Log In",
            href: '/Log_in'

        },
    ]
  return (
    <div className="flex text-white justify-center items-center p-2 ">
      <ul className="flex ">
        {
            nav.map((link,index)=>(
                <li className="py-2 px-20 hover:text-green-400" key={index}>
                    <Link href={link.href}>{link.lable}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Navbar;
