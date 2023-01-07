void main(List<String> args) {
  int number = int.parse(args.first);
  final numbers = <int>[];
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0) numbers.add(i);
    if (i % 5 == 0) numbers.add(i);
  }

  print(numbers.reduce((a, b) => a + b));
}
