import { Box } from "@mui/system";
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider, Link, List, ListItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";

import logoSenai from "./assets/logo-senai.png";

import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import CachedIcon from '@mui/icons-material/Cached';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


function AppDrawer(props) {

	const {drawerState, setDrawerState} = props;

	return(
		<Box
			component="nav"
			sx={{ 
				width: 250,
				height: "100%",
				backgroundColor: "#C10202"
			}}
			role="presentation"
		>
			<Box sx={{ textAlign: "right", color: "white" }}>
				<img src={logoSenai} alt="Logo Senai Job" width={"100%"}/>
				<Typography sx={{
					fontSize: "1.5rem",
					fontWeight: "bold",
					padding: "0 1rem",
				}}>
					JOB
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ textAlign: "right", color: "white", display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 2rem", color: "white", alignItems: "start" }}>
				<Button startIcon={<HomeIcon />} sx={{ color: "white" }} >Home</Button>
				<Button startIcon={<ViewListIcon />} sx={{ color: "white" }}>Meu Perfil</Button>
				<Button startIcon={<PersonIcon />} sx={{ color: "white" }}>Minhas Vagas</Button>
			</Box>
			<Divider />
		</Box>
	)
}

function App(props) {

	const [drawerState, setDrawerState] = useState(false);

	return (
		<Box className="main-container">
			<Box className="top-navigation"
				component="header"
				sx={{ width: "100%" }}
			>
				<AppBar position="static" sx={{ backgroundColor: "#566573"}}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => {setDrawerState(!drawerState);}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							SenaiJob
						</Typography>
						<Button color="inherit">Sair</Button>
						<Drawer
							open={drawerState}
							onClose={() => { setDrawerState(false); }}
							sx={{
								width: "240px"
							}}
						>
							<AppDrawer 
								drawerState={drawerState}
								setDrawerState={setDrawerState}
							/>
						</Drawer>
					</Toolbar>
				</AppBar>
			</Box>
			<Box className="content-container"
				component="main"
				sx={{ 
					alignSelf: "center",
					display: "flex",
					maxWidth: "1024px",
					width: "100%",
					padding: "2rem"
				}}
			>
				<Box className="jobs-board-container"
					sx={{ 
						backgroundColor: "#D5D8DC",
						borderRadius: "5px",
						padding: "1rem",

						width: "100%",

						display: "flex",
						flexDirection: "column",

						gap: "1rem"
					}}
				>
					<Box className="board-header" 
						sx={{
							display: "flex",
							justifyContent: "space-between"
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<IconButton>
								<ArrowBackIcon />
							</IconButton>
							<Typography sx={{ fontWeight: "bold", fontSize: ".8rem" }}>
								Emprego - AUXILIAR DE MANUTENÇÃO Manutenção predial / industrial
							</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography sx={{ fontWeight: "bold", fontSize: ".8rem" }}>
								1 vaga
							</Typography>
							<IconButton>
								<CachedIcon />
							</IconButton>
						</Box>
					</Box>
					<Box className="board-details"
						sx={{
							display: "flex",
							gap: "1rem"
						}}
					>
						<Box sx={{ width: "50%", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Responsabilidades e atribuições</Typography>
								<Link underline="hover" sx={{ color: "black" }}>https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</Link>
							</Box>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Local de Trabalho</Typography>
								<Typography sx={{ fontSize: ".9rem" }}>Rua Elton Silva, 905 - Centro, Jandira - SP, 06600-025</Typography>
							</Box>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Horário</Typography>
								<Typography sx={{ fontSize: ".9rem" }}>De Segunda a Domingo sendo 8h diárias, com 1h de intervalo e duas folgas semanais conforme escala</Typography>
							</Box>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Benefício</Typography>
								<Typography sx={{ fontSize: ".9rem" }}>Não informado</Typography>
							</Box>
						</Box>
						
						<Box sx={{ width: "50%", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
							<Box sx={{ fontSize: ".9rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
									Pré Requisitos
								</Typography>
								<Box
									sx={{ 
										backgroundColor: "#E31010",
										borderRadius: "5px",
										padding: "1rem",
										color: "white"
									}}
								>
									<Typography sx={{ fontSize: ".9rem" }}>
										Conhecimentos básicos na área de manutenção predial, podendo compreender as áreas de: Alvenaria, Pintura, Instalações Elétricas e Instalações Hidráulicas.
									</Typography>
								</Box>
								<Box
									sx={{ 
										backgroundColor: "#E31010",
										borderRadius: "5px",
										padding: "1rem",
										color: "white"
									}}
								>
									<Link underline="hover" sx={{ color: "white" }}>
										https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G
									</Link>
								</Box>
							</Box>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Salário</Typography>
								<Typography sx={{ fontSize: ".9rem" }}>De Segunda a Domingo sendo 8h diárias, com 1h de intervalo e duas folgas semanais conforme escala</Typography>
							</Box>
							<Box sx={{ fontSize: ".9rem" }}>
								<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Observações</Typography>
								<Typography sx={{ fontSize: ".9rem" }}>
									Inscreva-se nesse link:&emsp;
									<Link underline="hover" sx={{ color: "black" }}>
										https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G
									</Link>
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box className="board-job-list"
						sx={{
							border: "1px solid black",
							borderRadius: "5px",
							padding: "1rem",
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
					>
						<Box className="job-list-header"
							sx={{
								textAlign: "center"
							}}
						>
							<Typography 
								component="h1"
								sx={{
									fontSize: "1.5rem"
								}}
							>
								<span style={{ color: "limegreen" }}>15</span> candidatos de <span style={{ color: "limegreen" }}>407</span> alunos vinculados
							</Typography>
						</Box>

						<Box className="job-list-new-candidates">
							<Typography sx={{ fontSize: ".9rem", fontWeight: "bold", color: "green" }}>Novos:</Typography>
							<Typography sx={{ fontSize: ".9rem" }}>Ainda não temos nenhum novo candidato</Typography>
						</Box>

						<Divider />

						<Box className="job-list-cards-container">
							<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>Vistos:</Typography>
							<List 
								className="job-card-list"
								sx={{
									display: "flex",
									gap: ".5rem",
									justifyContent: "center",
									flexWrap: "wrap"
								}}
							>

								<ListItem className="job-card-list-item"
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "start",
										maxWidth: "min-content",
										gap: ".5rem",
										border: "1px solid black",
										borderRadius: "5px",
										boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, .5)"
									}}
								>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Ana da Silva
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										<span style={{ fontWeight: "bold" }}>33</span> anos. Mora em <span style={{ fontWeight: "bold" }}>Santana de Parnaíba</span>
									</Typography>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Último Curso
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										Tecnologia da Informação - Excel Completo - 2022
									</Typography>
									<Divider />
									<Box
										sx={{ 
											display: "flex",
											gap: "1rem"
										}}
									>
										<Button startIcon={<AssignmentIndIcon />} onClick={() => { alert("Ops, faltou o modal. Mais um pouquinho de tempo e eu fazia. Muita saúde pra vocês e obrigado por me convidar para a entrevista prática!")}}>Detalhes</Button>
										<Button startIcon={<AssignmentTurnedInIcon />}>Contratei</Button>
									</Box>
								</ListItem>
								<ListItem className="job-card-list-item"
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "start",
										maxWidth: "min-content",
										gap: ".5rem",
										border: "1px solid black",
										borderRadius: "5px",
										boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, .5)"
									}}
								>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Ana da Silva
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										<span style={{ fontWeight: "bold" }}>33</span> anos. Mora em <span style={{ fontWeight: "bold" }}>Santana de Parnaíba</span>
									</Typography>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Último Curso
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										Tecnologia da Informação - Excel Completo - 2022
									</Typography>
									<Divider />
									<Box
										sx={{ 
											display: "flex",
											gap: "1rem"
										}}
									>
										<Button startIcon={<AssignmentIndIcon />} onClick={() => { alert("Ops, faltou o modal. Mais um pouquinho de tempo e eu fazia. Muita saúde pra vocês e obrigado por me convidar para a entrevista prática!")}}>Detalhes</Button>
										<Button startIcon={<AssignmentTurnedInIcon />}>Contratei</Button>
									</Box>
								</ListItem>
								<ListItem className="job-card-list-item"
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "start",
										maxWidth: "min-content",
										gap: ".5rem",
										border: "1px solid black",
										borderRadius: "5px",
										boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, .5)"
									}}
								>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Ana da Silva
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										<span style={{ fontWeight: "bold" }}>33</span> anos. Mora em <span style={{ fontWeight: "bold" }}>Santana de Parnaíba</span>
									</Typography>
									<Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
										Último Curso
									</Typography>
									<Typography sx={{ fontSize: ".9rem" }}>
										Tecnologia da Informação - Excel Completo - 2022
									</Typography>
									<Divider />
									<Box
										sx={{ 
											display: "flex",
											gap: "1rem"
										}}
									>
										<Button startIcon={<AssignmentIndIcon />} onClick={() => { alert("Ops, faltou o modal. Mais um pouquinho de tempo e eu fazia. Muita saúde pra vocês e obrigado por me convidar para a entrevista prática!")}}>Detalhes</Button>
										<Button startIcon={<AssignmentTurnedInIcon />}>Contratei</Button>
									</Box>
								</ListItem>

							</List>
						</Box>

					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
