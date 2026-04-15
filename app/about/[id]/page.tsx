const AboutDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>AboutDetailsPage</div>;
};
export default AboutDetailsPage;
