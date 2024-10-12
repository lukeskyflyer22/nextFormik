import Link from 'next/link';
import ClubForm from "@/components/FormEditing/ClubForm";
import OrganizationForm from "@/components/FormEditing/OrganizationForm";
import ProgrammeForm from "@/components/FormEditing/ProgrammeForm";
import GiftedForm from "@/components/FormEditing/GiftedForm";

export default function Blog({params}: {params: {editingformId: string}}) {

    return (
        <div>
            {params.editingformId === 'clubs' && <ClubForm />}
            {params.editingformId === 'organization' && <OrganizationForm />}
            {params.editingformId === 'programme' && <ProgrammeForm />}
            {params.editingformId === 'gifted' &&  <GiftedForm />}
            
            <Link href={'/'} >Go back to Home page</Link>
        </div>
    )


}