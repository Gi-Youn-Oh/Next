import { notFound, redirect } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import GoProudcts from "@/components/GoProducts";
// export const revalidate = 3;


// props는 param객체를 가지고 있고, param객체는 slug폴더명을 가지고 있다.
type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    }
}

export default async function ProductPage({ params: { slug } }: Props) {
    const product = await getProduct(slug);
    // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
    if (!product) {
        redirect('/products');
        // notFound();
    }
    return (
        <>
            <h1>{product.name}</h1>
            <Image src={`/images/${product.image}`} alt={product.name} width='300' height='300'/>
            <GoProudcts/>
        </>
    );
}

export async function generateStaticParams() {
    // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id
    }))
}