import { FC } from "react";

// 동적 세그먼트를 정의한 인터페이스
interface PostPageProps {
    params: {
        slug: string;
    }
}

const PostPage: FC<PostPageProps> = ({params}) => {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>동적 세그먼트 : {params.slug}</p>
        </main>
    );
};

export default PostPage;