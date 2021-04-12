import "./PostFooter.css";

const PostFooter = () => {
  return (
    <div className="post__footer">
      <div className="post__footerActivities">
        <div className="post__footerActivitiesLike">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7rem"
            height="1.6rem"
            viewBox="0 0 17 16"
            className="Activities_heart__lO_pi Activities_icon__3FBE3 "
          >
            <g fillRule="evenodd">
              <g>
                <path
                  d="M33.716 16.718l-.545-.434c-3.253-2.586-5.217-4.145-6.335-6.182-.823-1.494-1.043-2.968-.639-4.262.34-1.081 1.105-1.953 2.156-2.453C28.893 3.13 29.48 3 30.1 3c1.475 0 2.863.758 3.616 1.932C34.47 3.758 35.86 3 37.333 3c.619 0 1.206.13 1.746.386 1.052.5 1.817 1.373 2.157 2.454.404 1.294.183 2.768-.64 4.262-1.118 2.037-3.084 3.6-6.341 6.187l-.539.429z"
                  transform="translate(-965 -620) translate(440 161) translate(11) translate(188 457) translate(301)"
                ></path>
              </g>
            </g>
          </svg>
          <p>0</p>
        </div>
        <div className="post__footerActivitiesRepost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.9rem"
            height="1.3rem"
            viewBox="0 0 19 13"
            className="Activities_repost__3mcrN Activities_icon__3FBE3 "
          >
            <g fillRule="evenodd">
              <g>
                <path
                  d="M18.825 9.245c-.231-.23-.607-.23-.84 0l-1.759 1.744V2.946C16.226 1.322 14.893 0 13.255 0H8.62c-.328 0-.595.264-.595.59 0 .325.267.589.595.589h4.635c.983 0 1.783.793 1.783 1.767v8.043l-1.76-1.744c-.231-.23-.608-.23-.84 0-.23.23-.232.604 0 .833l2.774 2.75c.115.115.267.172.42.172.153 0 .304-.057.42-.173l2.773-2.749c.233-.23.233-.602 0-.833zm-8.446 2.577H5.743c-.982 0-1.782-.794-1.782-1.768V2.011L5.72 3.755c.117.115.27.173.421.173.152 0 .304-.058.42-.173.232-.23.232-.603 0-.833L3.788.173c-.232-.23-.609-.23-.84 0L.175 2.923c-.233.229-.233.602 0 .832.233.23.607.23.84 0l1.759-1.744v8.043C2.774 11.68 4.107 13 5.745 13h4.635c.328 0 .595-.264.595-.59 0-.324-.267-.588-.595-.588h-.001z"
                  transform="translate(-847 -633) translate(440 172) translate(18) translate(181 457) translate(193) translate(15 4)"
                ></path>
              </g>
            </g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="180"
              dur=".3s"
              begin="mouseenter"
              repeatCount="1"
              fill="freeze"
            ></animateTransform>
          </svg>
          <p>0</p>
        </div>
        <div className="post__footerActivitiesComments">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4rem"
            height="1.4rem"
            viewBox="0 0 14 14"
            className="Activities_icon__3FBE3"
          >
            <g fillRule="evenodd">
              <g>
                <path
                  d="M8.47.007L5.53 0C2.428 0 0 2.43 0 5.53c0 2.905 2.258 5.109 5.292 5.225v2.713c0 .077.03.203.085.286.1.16.272.246.448.246.098 0 .196-.027.285-.084.187-.119 4.588-2.934 5.733-3.903C13.19 8.873 13.998 7.2 14 5.54v-.012c-.004-3.096-2.431-5.52-5.53-5.52zm2.685 9.195c-.804.68-3.446 2.414-4.8 3.292v-2.26c0-.293-.238-.531-.532-.531h-.28c-2.595 0-4.479-1.755-4.479-4.172 0-2.506 1.962-4.468 4.466-4.468l2.94.007c2.505 0 4.467 1.961 4.468 4.463-.002 1.354-.668 2.725-1.782 3.67z"
                  transform="translate(-742 -632) translate(440 172) translate(18) translate(181 457) translate(87) translate(16 3)"
                ></path>
              </g>
            </g>
          </svg>
          <p>0</p>
        </div>
        <div className="post__footerActivitiesShare">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 15 15"
            className="Activities_icon__3FBE3 Activities_share__RiSVz "
          >
            <g fillRule="evenodd">
              <g>
                <path
                  d="M10.969 18c.558 0 1.037-.199 1.434-.597.398-.397.597-.876.597-1.434 0-.559-.199-1.037-.597-1.435-.397-.398-.876-.597-1.434-.597-.339 0-.65.075-.933.223-.284.148-.515.349-.692.603l-5.358-2.73c.026-.084.045-.171.057-.26.013-.089.02-.18.02-.273 0-.118-.011-.233-.032-.343-.021-.11-.049-.216-.083-.317l5.383-2.615c.186.254.421.457.705.609.283.152.594.229.933.229.558 0 1.037-.2 1.434-.597.398-.398.597-.876.597-1.435 0-.558-.199-1.037-.597-1.434C12.006 5.199 11.527 5 10.97 5c-.559 0-1.037.199-1.435.597-.398.397-.597.876-.597 1.434 0 .076.005.153.013.229.009.076.021.152.038.228L3.53 10.142c-.186-.212-.408-.377-.666-.496-.258-.118-.536-.177-.832-.177-.558 0-1.037.199-1.434.596C.199 10.463 0 10.941 0 11.5s.199 1.037.597 1.435c.397.397.876.596 1.434.596.322 0 .62-.07.895-.21.275-.139.506-.327.692-.564l5.383 2.742c-.025.076-.042.152-.05.229-.01.076-.014.156-.014.24 0 .56.2 1.038.597 1.435.398.398.876.597 1.435.597zm0-9.75c-.339 0-.627-.118-.864-.355S9.75 7.37 9.75 7.03c0-.338.118-.626.355-.863s.525-.356.864-.356c.338 0 .626.119.863.356s.355.525.355.863c0 .339-.118.627-.355.864s-.525.355-.863.355zM2.03 12.719c-.338 0-.626-.119-.863-.356S.813 11.84.813 11.5c0-.339.118-.626.355-.863s.525-.356.863-.356c.339 0 .627.119.864.356s.355.524.355.863c0 .339-.118.626-.355.863s-.525.356-.864.356zm8.938 4.469c-.339 0-.627-.119-.864-.356s-.355-.525-.355-.863c0-.339.118-.627.355-.864s.525-.355.864-.355c.338 0 .626.118.863.355s.355.525.355.864c0 .338-.118.626-.355.863s-.525.355-.863.355z"
                  transform="translate(-638 -633) translate(440 172) translate(18) translate(181 457)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export { PostFooter };