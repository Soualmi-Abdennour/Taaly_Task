import Form from "@/components/Form";
import Image from 'next/image';
import Link from 'next/link';



function Page() {    
    return (
      <div>
        <div className="flex flex-col items-start gap-5 pt-10 pl-32 pr-20 mb-10">
          <h2 className="font-semibold text-heading-2 text-body">
            Welcome to <strong className="font-extrabold">Taaly!</strong>
          </h2>
          <h2 className="font-semibold text-heading-2 text-body">
            Login Here
          </h2>

          <Form formType="LOGIN_FORM"></Form>

          <h2 className="font-medium text-sm text-black">
            Don’t have an account yet?{" "}
            <Link href="/signup" className="text-neutrals hover:underline">
              Sign up Now
            </Link>
          </h2>
        </div>
        <div>
          <Image
            src="/images/capa-1.png"
            width={700}
            height={300}
            alt="capa image"
          ></Image>
        </div>
      </div>
    );
}

export default Page
