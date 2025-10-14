export default {
  async fetchReport() {
    try {
      const response = await Get_TeamDashboardData.run();
			showAlert("Report generated successfully!", "success");	
			
			const parsedData = response.map(r => ({
				ResultSetName: r.ResultSetName,
				Data: r.JsonData ? JSON.parse(r.JsonData) : []
			}));
			
			storeValue("reportData", parsedData);
			showModal("Report_Modal");
    } catch (err) {
      showAlert("Error generating report", "error");
    }
  }
}
