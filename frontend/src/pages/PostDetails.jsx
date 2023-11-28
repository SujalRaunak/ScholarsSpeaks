import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment"

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@sujalraunak</p>
          <div className="flex space-x-2">
            <p>10/11/23</p>
            <p>10:45</p>
          </div>
        </div>

        <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" className="w-full  mx-auto mt-8" alt="" />
        
        <p className="mx-auto mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis sunt labore alias voluptate doloribus modi. Voluptate dolorum saepe laboriosam optio, repellendus rem similique assumenda, blanditiis deserunt excepturi ipsam magni in non consequatur. Minima voluptas distinctio praesentium voluptatum? Unde inventore saepe, doloribus quisquam ut officiis quos accusamus. Asperiores facilis, ducimus expedita quisquam provident eligendi recusandae culpa eveniet mollitia nemo ratione deserunt labore magni ab! Quidem sit dolor dolore cum facilis impedit quas minima? <p> Ipsa, voluptatum eligendi quia aperiam voluptate obcaecati blanditiis nam soluta nulla esse ullam quidem numquam molestiae alias, sapiente quam tenetur sed! Eaque et, sunt quas tenetur nobis obcaecati aperiam magnam, eos modi repellat necessitatibus distinctio error! Quaerat dolorem, dignissimos aliquid ducimus eius quo iste molestias delectus accusamus doloremque beatae esse deleniti! Minima fuga, aperiam neque eaque odit,</p> <p> animi reprehenderit explicabo sapiente ex suscipit aliquam possimus omnis corrupti facere accusamus expedita ipsum placeat, delectus sit reiciendis blanditiis laboriosam dignissimos quasi excepturi. Ipsum, minima nostrum quisquam in, porro mollitia, doloremque impedit iure similique ratione voluptatem vero quae aut deserunt! Repellendus quam fuga et illo saepe. Asperiores deserunt veniam veritatis recusandae ea illo provident unde. Illo expedita iusto libero, esse nesciunt reprehenderit veniam animi velit molestias debitis saepe doloribus beatae, earum eligendi soluta officia odio aliquid atque fugiat cupiditate minus pariatur vero? Recusandae quidem molestiae fuga, doloremque totam molestias, sit delectus fugiat dolore </p>ipsum voluptatibus laboriosam quo nesciunt, asperiores deleniti? Ducimus nesciunt voluptas numquam ea facilis autem voluptate neque a quaerat ipsum, quisquam expedita dolor temporibus nostrum suscipit distinctio debitis est eveniet molestias, labore quo deserunt atque et! Inventore laudantium omnis dolorum dolores vel reiciendis tenetur, ad error fugit, ex sunt eaque modi, placeat optio quasi nobis voluptate. Dicta reiciendis qui eligendi, sed vel ducimus ipsa quasi tempore veritatis nostrum nisi laboriosam ratione odio quae rerum nemo. Quidem laborum reiciendis fugit at consequuntur vitae fugiat ex dolores cum necessitatibus, omnis animi dolorum fuga eaque eum quibusdam corporis placeat nam nihil id eveniet? Cumque iure error minima repudiandae explicabo? Similique dolorum fugit quisquam, vero ex dolores quas voluptas quis nostrum perspiciatis neque optio tenetur molestiae saepe voluptatum excepturi. Error rerum dolores quo ea tenetur expedita eum ratione sint iure, fugiat dolorem provident quam cum ut doloremque quidem alias animi natus. Cupiditate unde ullam repudiandae incidunt repellat autem reprehenderit, quaerat pariatur maiores, corrupti nisi dicta ipsam distinctio blanditiis iusto veritatis quos cum maxime numquam, quae magni doloribus. Tenetur minima id aliquam corporis!</p>

        <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories:</p>
        <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
        <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
        </div>
      </div>

      <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
        
      </div>
      {/* write a comment */}
      <div className="w-full flex flex-col mt-4 md:flex-row">
      <input type="text"placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
      <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
      </div>
      <Footer/>
    </div>
  );
};

export default PostDetails;
