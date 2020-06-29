package com.plb.jasper;

import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;

public class JFreeChartScriptlet extends JRDefaultScriptlet {

	@Override
	public void afterReportInit() throws JRScriptletException {
		
		/* Need JFreeChart DEPENDENCY 
		 * 
		 *
		DefaultPieDataset dataset = new DefaultPieDataset();
		dataset.setValue("Java", new Double(43.2));
		dataset.setValue("Visual Basic", new Double(10.0));
		dataset.setValue("C/C++", new Double(17.5));
		dataset.setValue("PHP", new Double(32.5));
		dataset.setValue("Perl", new Double(1.0));

		JFreeChart chart = 
			ChartFactory.createPieChart3D(
				"Pie Chart 3D Demo 1",
				dataset,
				true,
				true,
				false
				);

		PiePlot3D plot = (PiePlot3D) chart.getPlot();
		plot.setStartAngle(290);
		plot.setDirection(Rotation.CLOCKWISE);
		plot.setForegroundAlpha(0.5f);
		plot.setNoDataMessage("No data to display");

		
		this.setVariableValue("Chart", new JCommonDrawableRenderer(chart));
*/
	}
}
