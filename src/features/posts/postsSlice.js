import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{ id: "1", title: "First Post!", date: new Date().toISOString(), content: "Hello!" },
	{
		id: "2",
		title: "Second Post",
		date: new Date().toISOString(),
		content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi molestiae autem numquam odio facere accusamus vel! Veritatis ipsam iste neque libero, nemo
				magnam beatae illo expedita enim nostrum ea animi ut eaque a qui recusandae vitae optio quibusdam aspernatur accusamus totam deleniti praesentium. Aspernatur
				repellendus earum debitis error? Itaque nobis libero soluta impedit, ipsam, aliquam recusandae delectus quam similique sit fugiat architecto provident error! Nemo
				cum optio doloremque voluptas veritatis sed magnam quia impedit incidunt, placeat officia rerum? Recusandae odit dicta corporis optio earum pariatur, perspiciatis
				corrupti fuga cupiditate fugiat dolorum nobis voluptatibus vitae quae minus at atque quis modi fugit hic necessitatibus provident? Porro, enim praesentium
				temporibus consequatur necessitatibus animi debitis totam aspernatur vel itaque veniam ad obcaecati dolore repudiandae eaque nihil ea. Eos aliquid totam magni
				repellat, numquam repudiandae debitis, id natus iure beatae ipsum nihil ad neque illum mollitia officia placeat enim obcaecati libero? Quae voluptas, nesciunt
				obcaecati deserunt dicta pariatur harum iusto corporis ducimus laborum iure officia modi sed omnis dolor hic numquam voluptatem nihil consectetur. Ab, neque! Porro
				dolor sapiente reiciendis laudantium assumenda quaerat, impedit numquam ratione perferendis repudiandae ipsum voluptates quasi tempore consequatur nesciunt laborum
				sit corporis inventore beatae itaque quibusdam accusamus earum. Edit Post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis minus
				excepturi officia modi rem voluptas nesciunt aperiam ipsa! Molestias sed eos eligendi ea dolor debitis non vero iure quos ut provident, odio dolorem animi?
				Accusantium ratione laudantium doloremque consequuntur impedit tenetur voluptates perspiciatis id, labore, nulla aperiam totam amet soluta inventore animi odio
				recusandae perferendis, velit itaque at! Nemo, facere explicabo deserunt corrupti aliquam reprehenderit sunt ullam tempore dicta ipsa neque quidem iusto tenetur sed
				sapiente, ipsam perspiciatis corporis possimus velit! Eos officiis id cum praesentium odit, repudiandae expedita explicabo. Aliquam molestiae impedit nulla
				perferendis labore odio neque distinctio, ab eos! Similique corrupti, explicabo harum eligendi error ut exercitationem incidunt cupiditate voluptate dolor tenetur
				cumque. Provident mollitia quaerat ipsam, exercitationem saepe, hic cupiditate autem iusto aliquid repudiandae illum! Sequi modi et aliquid consequuntur quia
				voluptates obcaecati, eum, accusantium illum reprehenderit adipisci, maxime necessitatibus. Pariatur vitae iste vel esse illo quaerat commodi doloremque. Hic nobis
				similique nam voluptatum ex asperiores voluptatibus doloribus quos consequuntur ipsum aperiam nemo ducimus ab sunt quo saepe numquam harum deserunt aliquid cum at,
				molestiae ullam labore? Corporis eligendi necessitatibus corrupti sed aliquam assumenda dignissimos exercitationem placeat illum libero delectus, obcaecati non
				atque repellat illo consequuntur. Ducimus eius voluptate reprehenderit ea cumque aliquid adipisci ipsa voluptas excepturi repellendus, quisquam impedit delectus,
				facilis labore consequatur ipsam blanditiis similique unde? Ab et dolorum assumenda, nulla voluptatum obcaecati itaque dolor consequatur, quidem in qui totam
				delectus debitis ipsum temporibus pariatur ipsam, tempore deleniti architecto dolorem dolore? Vitae corporis modi unde velit consequuntur tenetur harum cumque vero
				atque, debitis sed? Ducimus nobis mollitia non minus, quis necessitatibus vitae natus! Illum sapiente iure magni ea velit maxime quae sed reprehenderit labore
				nulla! Optio officiis quo fugit alias voluptas nihil, magni similique accusantium vitae dolorum ex eveniet aperiam autem rem ipsa esse. Eaque quas doloremque,
				beatae incidunt expedita porro repellendus. Porro voluptatibus eveniet, libero quo quasi ullam magni illo amet, dolores sunt earum eius fugit impedit quibusdam
				expedita eum voluptas in saepe dolor est rerum voluptate quos hic. Commodi, neque. Odio, similique nesciunt illum perferendis, porro accusantium facere asperiores
				rerum pariatur suscipit ab dignissimos vel ullam ipsum vero provident sint praesentium esse, quae nemo aspernatur hic numquam nostrum. Eius cumque reprehenderit
				voluptatum dolore vero quaerat delectus, excepturi voluptates corrupti qui enim eligendi vitae, consequuntur porro omnis sint placeat ipsa est odit! Quis nulla rem
				ea fuga laborum, consectetur nesciunt dicta perferendis incidunt?`,
	},
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				// action.payload = newPost
				state.push(action.payload);
			},

			prepare: (title, content, userId) => {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						user: userId,
					},
				};
			},
		},

		postUpdated: (state, action) => {
			const { id, title: newTitle, content: newContent } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			if (existingPost) {
				existingPost.title = newTitle;
				existingPost.content = newContent;
			}
		},
	},
});

// When we write the postAdded reducer function, createSlice will automatically generate an action creator func with the same name.
// We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".
export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
