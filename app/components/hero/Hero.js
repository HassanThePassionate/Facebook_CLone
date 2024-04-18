import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.wrapper}>
            <div className={styles.img}>
              <Image
                src='https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/357452827_100211639836159_3292903938438069324_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P_PefF-oWgcAb7tiHJ0&_nc_ht=scontent.fisb13-1.fna&oh=00_AfBC3e-4B99EIiQe_Hzt44ue6xhbdrOj9CbtPSHYkqYUIw&oe=66266811'
                alt='img'
                height={36}
                width={36}
                className='rounded-full'
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>Ali Hassan</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i className={styles.image}></i>
            <div className={styles.text}>
              <div className={styles.title}>Find friends</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -407px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Marketplace</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -444px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Memories</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -185px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Saved</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -37px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Groups</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -518px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Videos</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <Image
              src='https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png'
              alt='img'
              height={36}
              width={36}
            />
            <div className={styles.text}>
              <div className={styles.title}>Feeds</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <i
              className={styles.image}
              style={{ backgroundPosition: "0 -37px" }}
            ></i>
            <div className={styles.text}>
              <div className={styles.title}>Events</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <Image
              src='https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png'
              alt='img'
              height={36}
              width={36}
            />
            <div className={styles.text}>
              <div className={styles.title}>Ads Manager</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <Image
              src='https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/fNPcDZC-2PD.png'
              alt='img'
              height={36}
              width={36}
            />
            <div className={styles.text}>
              <div className={styles.title}>Crisis Responce</div>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.story_wrapper}>
            <div className={styles.create_story}>
              <div className='h-[40px] w-[40px] rounded-full bg-[#EBF5FF] flex items-center justify-center'>
                <svg
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  fill='currentColor'
                  aria-hidden='true'
                  class='x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq'
                  style={{ color: "#0866FF" }}
                >
                  <path d='M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z'></path>
                </svg>
              </div>
              <div className={styles.story_text}>
                <div className={styles.p_title}>Create Story</div>
                <div className={styles.s_title}>
                  Share a Photo or write something
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.story_wrapper} mt-4`}
            style={{ padding: "12px 16px 10px" }}
          >
            <div className={styles.create_post}>
              <div className={styles.w_post}>
                <div className='p_img'>
                  <Image
                    src='https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/357452827_100211639836159_3292903938438069324_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P_PefF-oWgcAb7tiHJ0&_nc_ht=scontent.fisb13-1.fna&oh=00_AfD0j736Jtv_P4EDD6qT3esLPxQ36QGIXX8gWNMGQqRGHg&oe=6626A051'
                    alt='img'
                    height={40}
                    width={40}
                    className='rounded-full'
                  />
                </div>
                <input
                  type='text'
                  name='text'
                  id='text'
                  readOnly
                  placeholder="What's on your mind"
                  className='bg-[#f0f2f5] w-full p-2 rounded-full outline-none cursor-pointer hover:bg-[#E4E6E9] text-[17px]'
                />
              </div>
              <div className={styles.u_post}>
                <div className={styles.posts}>
                  <Image
                    src='https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png'
                    alt='img'
                    height={24}
                    width={24}
                  />
                  <span>Live Video</span>
                </div>
                <div className={styles.posts}>
                  <Image
                    src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png'
                    alt='img'
                    height={24}
                    width={24}
                  />
                  <span>Photo/video</span>
                </div>
                <div className={styles.posts}>
                  <Image
                    src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png'
                    alt='img'
                    height={24}
                    width={24}
                  />
                  <span>Feeling/activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </main>
    </div>
  );
};

export default Hero;
