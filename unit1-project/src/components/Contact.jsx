import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `Your comment has been submitted, thank you!\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Comment: ${comment}`
        );
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-items">
                <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />               
            </div>
                
            <div className="form-items">
                <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
            </div>

            <div className="form-items">
                <label>Comments:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
            </div>
            <button type="submit">Submit</button>
        </form>

    )
}