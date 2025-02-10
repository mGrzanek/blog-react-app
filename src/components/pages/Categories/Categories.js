import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector } from "react-redux";
import { ListGroup, Container} from "react-bootstrap";
import CategoryLink from "../../views/CategoryLink/CategoryLink";
import FormCategory from "../../features/FormCategory/FormCategory";

const Categories = () => {  
    const categories = useSelector(getAllCategories);
    
    return(
        <Container data-testid="categories-section" className="m-3">
            <h1 className="pb-4">All categories:</h1>
            <ListGroup as="ul" className="col-sm-12 col-md-6 col-lg-4">
                {categories.map(category => <CategoryLink key={category.id} {...category} /> )}
                <FormCategory />
            </ListGroup>
        </Container>
    );
}

export default Categories;