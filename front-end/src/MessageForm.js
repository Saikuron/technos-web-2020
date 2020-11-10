import React from 'react';

// function MessageForm( props )
// {
//   const MessageForm = ({ addMessage }) => {
//     const onSubmit = (e) => {
//       e.preventDefault();
//       const data = new FormData(e.target);
//       addMessage({
//         content: data.get('content'),
//         author: 'Lucas',
//         creation: Date.now(),
//       });
//       e.target.elements.content.value = '';
//     };
//     return (
//       <form style={props.cssForm}  onSubmit={onSubmit}>
//         <input type="input" name="content" style={props.cssContent} />
//         <input type="submit" value="Send" style={props.cssSend} />
//       </form>
//     )
//   };
//
//   return(
//     <MessageForm addMessage = {props.addMessage}/>
//   );
// }

function MessageForm( props )
{
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let cont = data.get('content')
    if( !cont )
      return
    props.addMessage({
      content: cont,
      author: 'Lucas',
      creation: Date.now(),
    });
    e.target.elements.content.value = '';
  };

  return(
    <form style = {props.cssForm}  onSubmit = {onSubmit}>
      <input type = "input" name = "content" style = {props.cssContent} />
      <input type = "image"  src={require("./send.png")} alt="Send" width="22" height="48" style = {props.cssSend} />
    </form>
  );
}

export default MessageForm;
