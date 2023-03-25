let laura, coombs, date, date2;
function setValues(width, height) {
  let halfHeight = height / 2;
  let halfWidth = width / 2;
  laura = [
    { x: 100, y: 100 },
    { x: 50, y: 100 },
    { x: 50, y: 200 },
    { x: 100, y: 200 },
    { x: 100, y: halfHeight - 200 },
    { x: 100, y: halfHeight - 100 },
    { x: 100, y: halfHeight - 200 },
    { x: halfWidth, y: halfHeight - 200 },
    { x: halfWidth, y: halfHeight - 200 },
    { x: halfWidth, y: halfHeight },
    { x: width - 200, y: 500 },
    { x: width + 100, y: 500 },
    // stay
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    { x: width + 100, y: 500 },
    // date exit
    { x: width + 100, y: -200 },
    { x: 100, y: -200 },
    { x: 100, y: 100 },
  ];

  coombs = [
    { x: 200, y: halfHeight + 200 },
    { x: halfWidth, y: halfHeight + 200 },
    { x: halfWidth, y: halfHeight + 100 },
    { x: halfWidth - 200, y: halfHeight + 100 },
    { x: halfWidth - 200, y: halfHeight },
    { x: halfWidth - 200, y: halfHeight },
    { x: halfWidth - 200, y: halfHeight + 100 },
    { x: halfWidth - 200, y: halfHeight + 100 },
    { x: 100, y: halfHeight + 100 },
    { x: 0, y: halfHeight + 100 },
    { x: -200, y: halfHeight + 100 },
    { x: -200, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    // stay
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height / 2 + 200 },
    { x: -500, y: height + 200 },
    // date exit
    { x: 200, y: height + 200 },
    { x: 200, y: halfHeight + 200 },
    { x: 200, y: halfHeight + 200 },
  ];

  date = [
    { x: -400, y: halfHeight + 200 },
    { x: 0, y: halfHeight + 200 },
    { x: 100, y: halfHeight + 200 },
    { x: 100, y: halfHeight + 100 },
    { x: 100, y: halfHeight },
    { x: halfWidth - 300, y: halfHeight },
    { x: halfWidth - 300, y: halfHeight + 100 },
    { x: halfWidth - 300, y: halfHeight + 100 },
    { x: halfWidth - 300, y: halfHeight + 200 },
    { x: halfWidth - 300, y: halfHeight + 200 },
    // exit
    { x: halfWidth - 300, y: height - 100 },
    { x: halfWidth - 300, y: height + 100 },
  ];

  date2 = [
    { x: width + 100, y: halfHeight + 200 },
    { x: width + 100, y: halfHeight + 200 },
    { x: halfWidth + 300, y: halfHeight + 200 },
    { x: halfWidth + 300, y: halfHeight + 100 },
    { x: halfWidth + 300, y: halfHeight },
    { x: halfWidth + 100, y: halfHeight },
    { x: halfWidth + 100, y: halfHeight + 100 },
    { x: halfWidth + 100, y: halfHeight + 100 },
    { x: halfWidth + 100, y: halfHeight + 200 },
    { x: halfWidth + 100, y: halfHeight + 200 },
    // exit
    { x: halfWidth + 100, y: height - 100 },
    { x: halfWidth + 100, y: height + 100 },
    { x: halfWidth + 100, y: height + 100 },
  ];
}
