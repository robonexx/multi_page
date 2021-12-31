import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

export default function Article() {
  const { id } = useParams();
  const url = 'http://localhost:3000/articles/' + id;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => navigate('/'), 2000);
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
