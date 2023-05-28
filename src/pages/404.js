import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
const NotFound = () => {
  return (
    <div className="container-404">
      <h1>404</h1>
      <h2 className="title">Oops! Page not found...</h2>
      <Link href="/">
        Go Back Home <AiFillHome className="icon" />
      </Link>
    </div>
  );
};

export default NotFound;
