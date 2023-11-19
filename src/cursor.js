
var sparklesArr = [];

export function trailAnimation(e, i, maxYTranslation) {
  let elem = document.createElement('div');

  elem = styleSparkle(elem, e, i);
  
  elem.classList.add("sparkle");

  document.body.appendChild(elem);

  elem = addAnimationProperties(elem, i, maxYTranslation);
  
  sparklesArr.push(elem);
}

function styleSparkle(elem, e, i) {
  let j = (1 - i) * 50;
  let size = Math.ceil(Math.random() * 10 * i) + 'px';
  
  elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
  elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
  
  elem.style.width = size;
  elem.style.height = size;
  elem.style.borderRadius = size;
  
  elem.style.background = 'hsla(' +
    Math.round(Math.random() * 160) + ', ' +
    '60%, ' +
    '90%, ' +
    i + ')';
  
  return elem;
}

function addAnimationProperties(elem, i, maxYTranslation) {
  const ANIMATION_SPEED = 1100;
  let lifeExpectancy = Math.round(Math.random() * i * ANIMATION_SPEED);

  elem.maxYTranslation = maxYTranslation;
  elem.animationSpeed = ANIMATION_SPEED;
  elem.created = Date.now();
  elem.diesAt = elem.created + lifeExpectancy;

  return elem;
}

function moveSparkles() {
  let remove = false;
  let moveIndex = 0;
  let sparkle;

  for (let i = 0; i < sparklesArr.length; i++) {
    sparkle = sparklesArr[i];
    remove = sparkle.diesAt <= Date.now();
    
    if (remove) {
      document.body.removeChild(sparkle);
    } else {
      if (sparkle.maxYTranslation) {
        let interpolation = calculateInterpolation(sparkle);
        sparkle.style.transform = `translateY(${interpolation}px)`; 
      }
      
      sparklesArr[moveIndex++] = sparkle;  // faster than array.splice()    
    }
  }
  
  sparklesArr.length = moveIndex;
  requestAnimationFrame(moveSparkles);
}

function calculateInterpolation(sparkle) {
  let currentMillis = Date.now();
  let lifeProgress = (currentMillis - sparkle.created) / sparkle.animationSpeed;
  let interpolation = sparkle.maxYTranslation * lifeProgress;
  
  return interpolation;
}

moveSparkles(); // starts the recursive loop