import Hero from '../Components/FinancialReport/Hero';
import MainFinancialReports from '../Components/FinancialReport/mainFinancialReport';
import Footer from '../Components/footer';

const FinancialReport = () => {
	return (
		<>
			<main>
				<Hero />
				<MainFinancialReports />
			</main>
			<Footer />
		</>
	);
};
export default FinancialReport;
