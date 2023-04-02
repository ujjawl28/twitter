import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { update,get, ref,child} from 'firebase/database';
import {db} from '../../firebaseconfig'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({open,setOpen,userId}) {
  const handleClose = () => setOpen(false);
 const [ivalue,setIvalue] = React.useState("");
 const [commentUser] = React.useState(JSON.parse(localStorage.getItem('user')));

 function addComment(userId, comment) {
  // Get a reference to the user's comment array in the database
  const commentRef = ref(db, `users/${userId}/comments`);

  // Fetch the existing comments from the database
  get(commentRef).then((snapshot) => {
    const comments = snapshot.val() || [];

    // Add the new comment to the array
    comments.push(comment);

    // Update the comments in the database
    update(commentRef, comments).then(() => {
      console.log('Comment added successfully');
    }).catch((error) => {
      console.error('Error adding comment:', error);
    });
  }).catch((error) => {
    console.error('Error fetching comments:', error);
  });
}
  return (
    <div>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           
            <div id="commentBox">
            <input type="text" placeholder="reply" className='inputComment' onChange={(e)=>{
                   setIvalue(e.target.value);
            }} />

            <button disabled={ivalue===""} className='commntBtn' onClick={()=>{
                const dbref = ref(db);
              
              get(child(dbref, "user/"+userId))
              .then((snapshot)=>{
                  const arr = snapshot.val().cmnt;
                  //  arr[0] = snapshot.val().cmnt;
                  // console.log(snapshot.val().mess);
                  const clint = snapshot.val().userName
                   console.log(userId);
                  if(!arr){
                    // arr[0] = ivalue;
                    // const ans = [ivalue];
                    const ans = [{message : ivalue,name : commentUser.username }];
                    console.log(ans);
                    update(ref(db, "user/"+userId),{
                        cmnt : ans,
                    })
                    .then(()=>{
                        alert("data successfully updated");
                    })
                    .catch((error)=>{
                        alert("unsuccessful, error"+error);
                  })
                  }else{
                    arr.push({message : ivalue,name : commentUser.username});
                    update(ref(db, "user/"+userId),{
                        cmnt : arr,
                    })
                    .then(()=>{
                        alert("data successfully updated");
                    }).catch((error)=>{
                        alert("unsuccessful, error"+error);
                  })
                  }
              }); 
            }
           
          
            }>Reply</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
