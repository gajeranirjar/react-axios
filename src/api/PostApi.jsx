import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/posts/`,
});

// get method
export const getPost = () => {
    return api.get("");
}

// delete method
export const deletePost = (id) => {
    return api.delete(`${id}`);
}

// post method
export const postData = (post) => {
    return api.post(`` , post);
}
// put method
export const updateData = (id , post) => {
    return api.put(`${id}` , post);
}