export type Post = {
    id: number
    image: string
    title: string
    text: string
    date: string
    category: string
}
export const postsArray: Post[] = [
{
    id: 1,
    image: "/images/slides/slide01.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "testimonianze",
},
{
    id: 2,
    image: "/images/slides/slide02.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "raccolta",
},
{
    id: 3,
    image: "/images/slides/slide03.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "raccolta",
},
{
    id: 4,
    image: "/images/slides/slide04.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "testimonianze"
},
{
    id: 5,
    image: "/images/slides/slide01.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "news",
},
{
    id: 6,
    image: "/images/slides/slide02.jpg",
    title: "Emergenza Ucraina",
    text: "Cosa stiamo facendo e cosa possiamo fare ?",
    date: "23.02.2023",
    category: "testimonianze",
},
]

export const getPostsObject = (array:Post[]) => array.reduce((object, post)=>({
    ...object,
    [post.id]: post,
}),{})