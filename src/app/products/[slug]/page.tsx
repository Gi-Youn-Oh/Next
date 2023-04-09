import { notFound } from "next/navigation";

// props는 param객체를 가지고 있고, param객체는 slug폴더명을 가지고 있다.
type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({ params }: Props) {
    if(params.slug === 'nothing') {
        notFound();
    }
    return <h1>{params.slug} 제품 설명!</h1>;
}

export function generateStaticParams() {
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product
    }))
}