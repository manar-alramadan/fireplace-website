import { Link } from "react-router-dom";
import "./AdminButton.css";

function AdminButton() {
    return (
        <div className="admin-button-container">
            <Link to="/admin/login" className="admin-button">
                🔒 Admin
            </Link>
        </div>
    );
}

export default AdminButton;