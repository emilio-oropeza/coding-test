import NewsView from '@/app/component/NewsView';

export default function NewsPage({ params }: { params: { slug: string } }) {
    const id = parseInt(params.slug); 
    return (
        <>
            <NewsView id={id}/>
        </>
    );
    
}