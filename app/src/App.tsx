import FileUploader from './components/FileUploader';
import TransactionsTable from './components/TransactionsTable';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-600">
      <nav className="bg-gray-800 p-4">
        <span className="text-white text-2xl font-semibold">Coodesh</span>
      </nav>
      <div className="w-full mx-auto p-8 flex flex-col gap-4">
        <FileUploader />
        <TransactionsTable />
      </div>
    </div>
  );
}

export default App;
