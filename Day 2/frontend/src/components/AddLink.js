import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function AddLink({ links, setLinks }) {
    let history = useHistory();
    const [title, setTitle] = useState("");
    const [beschreibung, setBeschreibung] = useState("");
    const [link, setLink] = useState("https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635_960_720.jpg");

    function submitForm(e) {
        e.preventDefault();
        const newLink = {
            title: title,
            beschreibung: beschreibung,
            link: link,
        }
        setLinks([...links, newLink]);
        setTitle("");
        setBeschreibung("");
        setLink("");
         history.push("/");
    }
    return (
        <div className="addlink">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                <input type="text" placeholder="Beschreibung" value={beschreibung} onChange={(e) => { setBeschreibung(e.target.value) }}></input>
                <input type="text" placeholder="Link" value={link} onChange={(e) => { setLink(e.target.value) }}></input>
                <input type="submit" value="Add"></input>
                
            </form>
        </div>
    );
}

export default AddLink;
