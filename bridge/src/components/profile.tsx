"use client";

const Profile = () => {
  return (
    <section className="h-screen flex items-center justify-around text-white px-6">
      <div className="px-28 mx-auto flex flex-col md:flex-row gap-10 md:gap-32 items-start">
        {/* 왼쪽: 이미지 */}
        <div className="w-[350px] min-w-[300px] h-auto rounded-xl shadow-lg overflow-hidden">
          {/* 실제 이미지로 대체 가능 */}
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover object-center bg-no-repeat"
          />
        </div>

        {/* 가운데: 소개글 */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Education
            </h3>
            <div className="text-2xl leading-loose">
              <p>2009.03 ~ 2012.03 서울성동고등학교</p>
              <p>2025.08 ~ 학점은행제 / 방송통신대학교</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Work History
            </h3>
            <div className="text-2xl leading-loose">
              <p>2021.12 ~ 2022.05 아이로그인</p>
              <p>2022.08 ~ 2023.08 주식회사 뱅코</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              My Hobby
            </h3>
            <div className="text-2xl leading-loose">
              <p>
                헬스는 단순한 운동을 넘어서 저에게는 집중력과 루틴을 지키는 힘을
                줍니다.
                <br />
                무게를 통해 스트레스를 내려놓는, 나만의 리셋 시간입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 스킬 목록 */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Languages
            </h3>
            <div className="text-2xl leading-loose">
              <p>
                Javascript, Typescript, Java, Kotlin, Python, PHP, HTML5, CSS,
                Node.js
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Libraries
            </h3>
            <div className="text-2xl leading-loose">
              <p>
                React.js, Redux, Redux Toolkit, Zustand, jQuery, Recoil, React
                Query, BeautifulSoup4, Selenium
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Frameworks
            </h3>
            <div className="text-2xl leading-loose">
              <p>Next.js, Android, Express</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Cloud Platforms
            </h3>
            <div className="text-2xl leading-loose">
              <p>AWS(EC2, S3), Netlify, Firebase, Vercel</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-5xl select-none mb-6">
              Databases
            </h3>

            <div className="text-2xl leading-loose">
              <p>
                MySQL, MongoDB, MariaDB, Firebase, SQLite, Supabase, PHPMyAdmin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
