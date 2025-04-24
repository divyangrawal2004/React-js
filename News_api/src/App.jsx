import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState([]);

  const News = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=5b13c2625a614d62aa40844111075b3f`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setItem(data.articles);
      });
  };
  useEffect(() => {
    News();
  }, []);

  return (
    <>
      <h1 align="center">News Api Data :-</h1>

      <table border={1} align="center">
        <thead>
          <tr>
   
            <th>Author</th>
            <th>Content</th>
            <th>Description</th>
            <th>publishedAt</th>
            <th>Source</th>
            <th>Title</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody align="center">
          {item.map((val, index) => {
            return (
              <tr key={index}>
             
                <td>{val.author}</td>
                <td>{val.content?.slice(0, 40)}</td>
                <td>{val.description?.slice(0, 40)}</td>
                <td>{val.publishedAt}</td>
                <td>
                  {
                    <>
                      <table border={1} align="center" cellSpacing={5} cellPadding={5}>
                        <thead>
                          <th>Id</th>
                          <th>Name</th>
                        </thead>
                        <tbody>
                        <tr>
                                <td>{val.source.id}</td>
                                <td>{val.source.name}</td>
                              </tr>
                       
                        </tbody>
                      </table>
                    </>
                  }
                </td>
                <td>{val.title}</td>
                <td>{val.url?.slice(0,30)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
