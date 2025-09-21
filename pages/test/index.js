import Link from "next/link";

function index() {
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center">
      <Link href="/get-started">link: - {"/get-started"}</Link>
      <Link href="/page-two">link: - {"/page-two"}</Link>
    </div>
  );
}

export default index;
