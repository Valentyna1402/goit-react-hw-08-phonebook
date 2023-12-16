import AuthNav from "./AuthNav"
import Nav from "./Navigation"
import UserMenu from "./UserMenu"

export default function AppBar () {
    return (
<header>
    <Nav />
    <AuthNav />
    <UserMenu />
</header>
    )
}