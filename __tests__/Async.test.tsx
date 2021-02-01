describe('', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(true);
  });

  it('should', () => {
    const { container } = render(
      <Async fallback={<p>Loading...</p>}>
        <Try>
          <Await></Await>

          <Catch></Catch>
        </Try>
      </Async>
    );
  });

  it('should', () => {
    const { container } = render(
      <Try>
        <Catch></Catch>
      </Try>
    );
  });
});
