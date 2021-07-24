import React, { useState } from 'react';

function CreateArea(props) {
          const [note, setNote] = useState({
            title: "",
            content: "",
          });

function handleChange(e){
      const { name, value } = e.target;
      setNote((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
}

function submitButton(i){
    i.preventDefault();
    console.log(i);

}
      return (
        <div>
            <form>
                <input
                value= {note.title}
                type="text"
                placeholder="Title"
                nameClass="title"
                onChange={handleChange}
                />
            
                <p>
                    <textarea
                    value={note.content}

                    nameClass="content"
                    placeholder="Take a note..."
                    onChange={handleChange}

                    ></textarea>
                </p>
                <button onClick={submitButton}>Add Note</button>

            </form>
        </div>
      );
}

export default CreateArea;
