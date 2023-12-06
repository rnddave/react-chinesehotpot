import ProductCard from '../product-card/product-card.component';

import {
    CategoryPreviewContainer,
    CategoryPreviewTitle,
    CategoryPreviewPreview
} from './category-preview.styles'

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2> 
                <CategoryPreviewTitle to={title}> 
                        {title.toUpperCase()}
                </CategoryPreviewTitle>
            </h2>
            <CategoryPreviewPreview>
                {
                    products
                    .filter((_, idx) => idx < 4 ) // e.g the first 4 (or less if less than 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product} />)
                }
            </CategoryPreviewPreview>

        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;
