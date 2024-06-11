import UserView from "@/app/component/UserView";
export default function UsersPage({ params }: { params: { slug: string } }) {
    const id = params.slug; 
    return (
        <>
            <UserView id={parseInt(id)} />
        </>
    );
}