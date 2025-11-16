import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>This is the posts page content.</p>
      </div>
    </div>
  )
}

export default Posts;