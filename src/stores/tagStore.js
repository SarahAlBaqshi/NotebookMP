import { decorate, observable } from "mobx";
import axios from "axios";

class TagStore {
  tags = [];
  //loading = true;

  fetchTags = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tags");
      this.tags = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TagStore -> fetchTag -> error", error);
    }
  };

  getTagByID = (tagID) => {
    return this.tags.find((tag) => tag.id === tagID);
  };

  createTag = async (newTag, notebook) => {
    try {
      const formData = new FormData();
      for (const key in newTag) formData.append(key, newTag[key]);
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/tags`,
        formData
      );
      const tag = res.data;
      this.tags.push(tag);
      console.log("TagStore -> createTag -> this.tags", this.tags)
      notebook.tags.push({ id: res.data.id });
      console.log("TagStore -> createTag ->  notebook.tags",  notebook.tags)
    } catch (error) {
      console.log("tagStore -> createTag -> error", error);
    }
  };




}

decorate(TagStore, {
  tags: observable,
  //loading: observable,
});

const tagStore = new TagStore();
tagStore.fetchTags();

export default tagStore;
