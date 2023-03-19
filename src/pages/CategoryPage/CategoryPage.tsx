import PageTitle from "components/PageTitle/PageTitle"
import PostsList from "components/PostsList/PostsList"
import { useParams } from "react-router-dom"
import { postsArray } from "utils/posts"

type Props = {
}

const CategoryPage = (props: Props) => {
    const {category} = useParams()
  return (
    <>
    <PageTitle title={category!} />
    <PostsList
        posts={postsArray.filter((post) => post.category === category!)}
    />
    </>
  )
}

export default CategoryPage