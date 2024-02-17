export const renderImages = (group, imageLength, setLink, handleImageChanger) => {
    return group.mainImage.length > 1 &&
      group.mainImage.slice(0, imageLength).map((image, idx) => (
        <div
          key={idx}
          // key={image?.color ?? ""}
          onMouseEnter={() => setLink(image.image)}
          onClick={(e) => handleImageChanger(e, image.image)}
          className="d-flex card-imgChanger-img border-radius-5 _img_product-imgchange"
        >
          <Image src={image.image} />
        </div>
      ));
  };

  export const renderAdditionalImagesDiv = (group, imageLength) => {
    if (group?.mainImage?.length > imageLength) {
      return (
        <div className="card-imgChanger-img border-radius-5 _img_product-imgchange bg-light">
          +{group?.mainImage?.length - imageLength}
        </div>
      );
    }
    return null;
  };

  export const renderSizes = (group, renderRemainingOptions) => {
    if (group.name === "Size" && group.count > 0) {
      return (
        <div>
          +{group.count} Sizes
          {group.count > 2 && <> | {renderRemainingOptions()}</>}
        </div>
      );
    }
    return null;
  };
  
export const renderOptions = (group, imageLengthMobile) => {
  if (group.mainImage.length > imageLengthMobile) {
    return (
      <div
        className="d-flex card-imgChanger-imges _img_product-imgchange plus-product-items"
        style={{
          padding: "0rem 1.5rem",
          marginTop: ".3rem",
          textWrap: "nowrap",
        }}
      >
        +{group.mainImage.length - 3} options
      </div>
    );
  }
  return null;
};

export default renderOptions;
