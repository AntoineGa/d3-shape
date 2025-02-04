var sqrt3 = Math.sqrt(3);

export var triangleDown = {
  draw: function(context, size) {
    var x = Math.sqrt(size / sqrt3),
        y = x * sqrt3 / 2;
    context.moveTo(0, y);
    context.lineTo(x, -y);
    context.lineTo(-x, -y);
    context.closePath();
  }
};

export var triangleUp = {
  draw: function(context, size) {
    var x = Math.sqrt(size / sqrt3),
        y = x * sqrt3 / 2;
    context.moveTo(0, -y);
    context.lineTo(x, y);
    context.lineTo(-x, y);
    context.closePath();
  }
};
