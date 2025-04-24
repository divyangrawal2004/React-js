import React from 'react';

const Comment = ({ comma }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#333', margin: '20px 0' }}>
        Comment Data :-
      </h1>
      <table
        style={{
          borderCollapse: 'collapse',
          margin: '0 auto',
          width: '90%',
          textAlign: 'center',
        }}
        border={1}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px' }}>Id</th>
            <th style={{ padding: '10px' }}>Body</th>
            <th style={{ padding: '10px' }}>Likes</th>
            <th style={{ padding: '10px' }}>Post-Id</th>
            <th style={{ padding: '10px' }}>Users-Data</th>
          </tr>
        </thead>
        <tbody>
          {comma.map((val, index) => {
            return (
              <tr key={index}>
                <td style={{ padding: '10px' }}>{val.id}</td>
                <td style={{ padding: '10px' }}>{val.body}</td>
                <td style={{ padding: '10px' }}>{val.likes}</td>
                <td style={{ padding: '10px' }}>{val.postId}</td>
                <td style={{ padding: '10px' }}>
                  <table
                    border={1}
                    style={{
                      borderCollapse: 'collapse',
                      width: '100%',
                      marginTop: '5px',
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: '#e8e8e8' }}>
                        <th style={{ padding: '6px' }}>Fullname</th>
                        <th style={{ padding: '6px' }}>ID</th>
                        <th style={{ padding: '6px' }}>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '6px' }}>{val.user.fullName}</td>
                        <td style={{ padding: '6px' }}>{val.user.id}</td>
                        <td style={{ padding: '6px' }}>{val.user.username}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Comment;
