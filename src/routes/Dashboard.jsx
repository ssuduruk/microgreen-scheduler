import { useAuthGuard } from "../hooks/AuthGuard"

const Dashboard = () => {
  useAuthGuard(false);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard