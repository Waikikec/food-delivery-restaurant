"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {

  const { status, data: session } = useSession();

  const router = useRouter();

  if (status === 'loading') {
    return <span>Loading...</span>
  };

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push('/menu');
      toast("The product has been deleted!");

    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  }

  return (
    <button
      className="bg-red-500 p-2 rounded-full absolute top-4 right-4"
      onClick={handleDelete}
    >
      <Image
        src={"/delete.png"}
        width={20}
        height={20}
        alt={""}

      />
    </button>
  )
}

export default DeleteButton