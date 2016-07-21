/* global Tether */

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): lazyload.js
 * @author Arthur Franco
 * --------------------------------------------------------------------------
 */

const LazyloadIngresso = (($) => {

  /**
   * Check for Lazyload dependency
   * Lazy Load Plugin for jQuery - https://github.com/tuupola/jquery_lazyload
   */
  if (window.Tether === undefined) {
    throw new Error('Bootstrap lazyload require Lazy Load Plugin for jQuery (https://github.com/tuupola/jquery_lazyload)')
  }


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'lazyloadIngresso'
  const VERSION             = '4.0.0-alpha.2'
  const DATA_KEY            = 'bs.lazyload'
  const DATA_API_KEY        = '.data-api'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 300

  const Default = {
    animation   : true,
    trigger     : 'scroll',
    container: window,
    effect : "fadeIn",
    offset : 300,
    skip_invisible: true,
    load: null,
    placeholder:'data:image/gif;base64,R0lGODlhMgAyAPcAAAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqSsrJ6vrpixsZOzs461tYi3toS4uH+6uXq7u3a8vG6+vWi/vmLAv13BwFnCwVbCwVPDwlHDwk/Dwk3Ew0zEw07FxE/GxVHHxlTIx1bJyFrKyV3LymLMy2bOzWzPznHR0HTS0XbS0XjT0nrT03zU037U1IDV1ILV1ITW1YvY15Pb2pze3aPg36nh4a7j47Tl5bnm5r/o6Nbx8eL29ub39+r4+PH6+vj8/P3+/v3+/v7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBAD1ACwAAAAAMgAyAAAI/gDrCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjxXJOewGsl44cOIYcvs1LVxHcuBiplyY7dcvYSQ1wowpsmE3YTZzZgznEmK4aclKKl1qUVxPjOG+UfTWrajFbsCaTSTXrdvTiuGAAbP6MFw3bxqbAdMmkSpZi9iytu02E+M3YtOY6t3Lty/HbtzqXgSHzJrEbtukZtRGjJrEb9uEXqRGjJtEcdu2CaYojhixzSO3gcPYrTFn0JxH+13dNzLqhOKyVdsI7to1baoZeqOmrBlajeC0XcMmGWE3Zcqo/d4ortu13Am9Kcv2GiN0btSyU7M8cDlT7Nq5DbMeT768+fPo06s3HxAAIfkECQQA+QAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjnKWllaenjqqqiKysgq6ufK+vdrGxcbKybLS0Z7W1Xra2Vre3ULi4S7m5Rrq6Qrq6P7u7PLu7Oru7Oby8Ob29Or6+O7+/PcDAP8HBQsLCRcPDScTETcXFUsbGV8jIXcnJX8rKYcvLY8vLZczMZ8zMaM3Nas3NbM3Nbs7OedHRgtTUjdjYltvbn97eq+Hhs+XkuefmvujowurpxerqyOvry+zrz+3s0u7t1u7u2O/u2/Dw4PLy5/b27vn58/v79/z8+v39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////CP4A8wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4PiwIkEJ+4jwnEEQ44saZIgO3DbWLZUOM7btm3hZtK86Q2lToXfwLH7SbSoyXHkNIYDR1EbtZwXseFSNpEcNWpJL4bDhQsqRHDUtGlUhmuaRKdMM0abKnFbNZ8YwfVqZrSu3bt4G16TJvMiuF/PJFaL5k2jNF50I3qLVk1jM17UJJKLFi2rRXG8ePV9ODitRW2IKYqzfDFk3tM6pb2FOC6as43gnj2L5nnht2bCin2DHU32NobWhAlrtpvjuGrPiivkJiwa3I61qTGbzizyQOU/pVO3jrq79+/gwwaLH0+eYkAAIfkECQQA+QAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2sLi4q7q6pry8or6+nb+/mcHBlcLCkcPDjsXEisbFh8bGhcfHgsjHgMjIfsnIfMnJe8rJecvKeMvLeMzLeMzLfs7OhtDQjNPTlNbWmtnZoNzbpN7dqeDfreHhsePjteXkuOblu+fmvujnwunoxurpyuvqzOvr0O3s1/Hw4PX06Pj37fn58fv68/v79vz8+P39+/79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////CP4A8wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4Phvon8Fu4jwnEEQ44sOfCcSXPfroljaC4cyo7jtl3DxlJhuXDhxLnUOO7atW03GZ4TB3RoRm7fzEUcN9Ok1asYyUnFyjCbtJ5cD5qTJm1r2IPgpGU7m9ArOLYIt0kjB7eu3bt4w1qDlvRiOGPLJFZz9k2jNMASvzmrpnGZMcYRzTlzZrbiOGPG+j4c/PYiN8QTx1W2OA5s3tMdoVUrB5EctMAawS1b5qwzw2+OjRWO7Ww2N4bWMC/bvbFctWW2E34zBo3ux+THZy+DLJA41+izqaPezr279+/gwwSLVxgQACH5BAkEAPwALAAAAAAyADIAhwAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr6ixsaKzs5y1tZa3t5G4uIy6uoe7u4K8vH6+vXq/vne/v3PAwHDBwG7BwWzCwWrCwmjDwmbEw2nHxm3JyHLLynfOzX/Pz4TR0YrU1JDX15TZ2Zjb25zd3J7e3qHf36Tg4Kfh4ani4q3k5LHl5bXm5rro6L7p6cHq6sTr68fs7Mfs7Mnt7cvu7s3u7s/v79Hw8NPw8NXy8tjz89z09OH29uf4+Ov5+e/6+vT7+/j9/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////wj+APkJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8eD46qJrDbuI0JzBEOOLDkwncl02JyVY3juGzl1Hc1Nc/aMpcJz4L6Jc6nRnDNn01A2TCfuWziiGatxg9pQHTlyJrNqzXiO6kWcE6Upw3oxXblzE9MpU+aVYrmZEr8pk6bxXLm2DMV+04jurERqy9BmVGdO8NbDiBMr/vismOHFBJsV4wbZILdizSoXRFesGDrNkYv5BH3uM+jTqCEac2ba4TllxTaOGzZMtENxw4ABEye7WO1reXUP480RnbNh4RhyA6bsMcfRzYJJD5Z5IHHE0adXT829u/fv4MMFix+/MCAAIfkECQQA+wAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKiooKqqmayskq6ujLCwhbGxf7OzerS0dbW1cLa2a7e3Z7i4Y7m5YLm5Xbq6Wrq6WLu7V7u7VLy8Vr+/WcHBXsTDY8bGa8jIcMrKdMzMeM3NftDQg9LSh9TUitXVjdfXj9jYktnZlNraltvbmdvbm9zcn93do97eqN/frOHgsOLisePisuPjs+TjteTkuOblu+fnvujowOnpw+rqxevqx+zrye3sy+3tzu7u0fDv2PPy3vX05ff26vj47vr58fr69Pv79/z8+f39+/79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v//////////////////////////////CP4A9wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4PhnIl0Fu4jwnIEQ44sOfCcyXTVkI1jWA6bOHUdyzlDhoylQnLYsHlzqbEcT2coG57zFpRoxmfY0kFUJ86nyatYLZqTmjEezonNgs28iC7c2IjpggXjajFeuHDxJHoL1kzjuHDmJIb1VtSsxGfD8makSi6r4cOIE19d5ispxnjlnD5E5kubRnTlBEPU5guZRnPl2D5E58sXOoz4ypXDN5GyOIzqMlMsdzojvriKc+sOtqy2boHievXy9fo3cF/DsRkXiG5ZL6vGiwtcpqu6rmXGqVvHvry79+/gwwaLH0/eY0AAIfkECQQA+wAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5OCLICKjo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5r7q6qru7pb29pcDAqcLCscXFrsfHp8nJqsvLqM3Mp87OpdDPo9HQodPSntXUm9bWmNfXl9jYldnYlNnZlNrZlNralNvaldvbltzbmNzcmt3cnN3dnd7doN/fo+DgpuHhqOLiquPjrOTjruTksOXlsubmuejowuvrz/Dw3PT05Pb26vj47/r68vv79vz8+f39+v39/P7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////CP4A9wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4PhoImEFu4jQnIEQ44sObCcSXTblI1jSO6auHQdyUVTpkwcw3Hbrn1zqZEcz2goG5b7dm0b0YzSvqGDmE4cS5NYs14sNzWjuq4Sow3zedEcOLIR0Q0bBraiOnDg1EkMNyyaRnHgkkIUe/XiuLMSpRV7ehFdOLRaEytezNjjs2B6L1aN7FCZL3Aay4mbGRGcL2Uax4kzJ/GcL1/nMK4TJ27dRMuIKZ7bTJFc6ozrcDbezXvYM9IQzwHPOI4Xr2CcGa4rx9x16GC8en1jiI55OecbzT3jFftgunK3PxImX4idt/nz6NOrX8++vXv2AQEAIfkECQQA+wAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3s7m5r7y8q76+qMDApcLCocTEn8bGnMfHmcjIl8rKlcvLk8zMkczMj83Njc7Oi8/PitDQidHRiNLSh9LSh9PTiNTUitbWjNjYj9nZkdralNzclt3dmN7em9/fneDgoOHho+LipuPjquTkruXluOjowevrye7u0vHw1/Ly3vX05/j37Pn57vr68fv69Pz79/z8+f39+v39+/79/P7+/P7+/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////CP4A9wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4PcmIlkxu0jwnAEQ44sOVCcSXPUiIFjCO5Zt3Mdwzkjdqwbw2/SnllzqTEcMWLNUDYUZ+2ZNKIZn10zB/Fct20ms2rNKK6cRnReJzoD9g2juGs+JZYDBiysRXTXrqGTyA2YM43drimFOJYlRnBoJT4DBvViuW1ptypezLjxx2a8Cls8x61sxGS6sGYMV1niNl3JNH7jJrkhOV26yGFMx41buomYvWEc13miONUZ0+F0zLv3RHbi9vo+B+7bt929yRkHh7y3uW/i2C02J666OKoDm2+lbh277+/gwwmLH0++vHnxAQEAIfkECQQA+gAsAAAAADIAMgCHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKyrLS0qLe2o7m5nru7mr28lr6+ksC/j8HBi8LCiMTDhcXEg8XFgcbGf8fGfMjHecnId8rJdsvKdMvLc8zLc8zMdM7Ndc/OdtDPd9HQeNLRetPSfdXUf9bVgdfWg9jXhtnYidrZjNvakNzblN3cmd/eoOHgq+Tkt+jnverpw+zrzO7u0fDw2PPy3vX05ff36/n48Pr69Pv79vz89/z8+Pz8+f39+v39/P7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////CP4A9QkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx4PZjIk0lu0jwm8EQ44sOTCcSXLShHlj6K1ZtnIdvykTJkwbw27Omk1zqfEbT2UoG4ab1uwZ0YzNrJGDWC4bNpNYs2YMN06jua4TlwnrhhGcNJYRx/EEa9GcNGnmJGYTtkxjNmkzI4pFe7HbWYnOhD29OO6aT62IEytezLgiuWzcGhv8hm2b5ILbsIG7PBAdNmzoOAsMV1l056mmU3sch/phum9kNaoLF06cOofkuGnb1hqjOnG1cS4Mp00bt94ayYULvVCctm/pTN5u6a26t8HIs4azfl219+/gwweLH0++PMGAACH5BAkEAPoALAAAAAAyADIAhwAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t6+4uKm6up69vZW/v4zBwYTDwn3ExHfFxXHGxWzGxmjHxmTHx2DIx17Ix1vIx1nIx1fIx1bIyFXIyFTIyFfKyVnLylvMy17NzGDOzWPPzmXPz2fQ0GrR0GzS0W/S0nLT03bU1IHY14vb25Xe3qPi4rDm5b3q6sjt7c/w79nz8+D19ej4+O76+fL7+/T7+/X8/Pf8/Pn9/fv9/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////////////////////wj+APUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8eD3JaJXMbtI8JwBEOOLDlQnEly2JZ9Y/jNGbdzHcON7MbQGzRn2Fxq1LmMGcqG4rA5iyY047Ns5CCe46bNpNWrWCWei5pVYThrLLsiPGfNGk6xCLlZm4n2oDewbQ+SyxY2rt27ePOWGwdPIzltPCOSG4dO4zfAEtGN44qxmzZwE8eNy4hOm7bCEgenwygO8cS+GtExzkvaozi+ENN987YRHThw4TAzJNeNG7fRF9GFe437YDjb3XpfhDcOnDmG47h92/xRtr5w3qJ7OypQuEno0qmX3s69u/fv4MMEi1cYEAAh+QQJBAD4ACwAAAAAMgAyAIcAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGss7OntrWjuLiWurqLvLyBvb13v75vv79owMBhwcBbwcFWwcFRwcFNwcFJwcFGwcFEwcFBwcFAwcE+wcE9wcE8wcE+wsJAw8NDxMRFxcVHxsVKx8ZMx8dOyMhRychTyslWyspZy8tdzMxhzc1lz85y0tJ/1taL2tmd39+q4+O35+e96enB6urO7+/a8/Pj9vbo+Pju+fnw+vry+/v1/Pv4/f36/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////8I/gDxCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHg9qOiTym7WPDkCNLDgRnEqK3ZNrKtWzIrVkyayxnLgRXLVmznDoTltOGLajRow3TbTQ3jiI5cegwgpOWjaI4cRnNSZNmTqI5ceQ0ZpPmTeLTrhm5UZVYTpzSjOOuqURKt67duwvDgYuakRy2bRLDfQub0Ztcs9/CadR27ZvEdN++vbVo7to1tBEFY64I7vBEdJMvmiOMt3TLb3shnusGWGM5bty8yWwoTlu2bFhde+PWTfHCb7e15d6IDhy3pnmzdTtncrbAb9qia3M8cHhQ6NKpm97Ovbv37+DDBIunGBAAOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  }

  const DefaultType = {
    animation       : 'boolean',
    trigger         : 'string',
    container       : 'window|object',
    effect          : 'string',
    offset          : 'number',
    skip_invisible  : 'boolean',
    load            : 'null|function',
    placeholder     : 'string'
  }

  const Event = {
    SCROLL          : `scroll${EVENT_KEY}${DATA_API_KEY}`,
    LOAD_DATA_API   : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    LOADED : 'lazy-loaded',
    INITIATED : 'lazy-load'
  }

  const Selector = {
    IMG       : 'img',
    DATA_LAZY : '[data-lazyload]'
  }

  const Trigger = {
    HOVER  : 'hover',
    FOCUS  : 'focus',
    CLICK  : 'click',
    MANUAL : 'manual'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class LazyloadIngresso {

    constructor(element, config) {

      // private
      this._isEnabled      = true
      this._timeout        = 0

      // protected
      this.element = element
      this.container = window
      this.config  = this._getConfig(config)
      this.tip     = null

      this._init()

    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME$(Selector.IMG, $el)
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // public

    enable() {
      this._isEnabled = true
    }

    disable() {
      this._isEnabled = false
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _init() {

      let $el = $(this.element);

      if(this._isImage()) {

         if(!$el.hasClass(ClassName.INITIATED)){

             // verify if the last image lazyloaded has container
             if(!$el.closest(Default.container).length && Default.container !== window){

                 Default.container = window;
             }

             this._applyLazyload();


         }else{
           // if not image

            if(_isBootstrapTabs()){
              return true
            }else{
              return false
            }

             // set container for recursive use of this function
             Default.container = $el;

             $(Selector.IMG, $el).each(function(){

               Default.container = $el;
               _applyLazyload(this)
             });


         }
      }
      return;

    }

    _applyLazyload(el) {

      $(el | this.element).lazyload(Default)

    }

    _isImage(){

      if(this.element.nodeType == Node.ELEMENT_NODE) {

        if(this.element.tagName == 'IMG'){
          return true
        }

        return false
      }
    }

    // Use for Bootstrap Tabs
    _isBootstrapTabs() {

      if($(this.element).attr('href')){

        let $el = $(this.element)
        // set referenced tab
        let $tab = $($el.attr('href'));

        if($el.attr('data-lazyload') && $el.attr('data-toggle') == 'tab'){

            $el.on('shown.bs.tab',function(){

                // fire scroll on tab to force images to show
                $(Selector.IMG, $tab).trigger(Event.SCROLL);

                return true;
            });
        }
      }
    }

    _onloadCallback(){

      $(this).toggleClass('lazy-load lazy-loaded')
    }

    _addClasses(){
      $(this.element).addClass(ClassName.INITIATED);
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        console.log('jq interface')
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ?
          config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new LazyloadIngresso(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

   $(window).on(Event.LOAD_DATA_API, () => {
     $(Selector.DATA_LAZY).each(function () {
       let $lazy = $(this)
       LazyloadIngresso._jQueryInterface.call($lazy, $lazy.data())
     })
   })



  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = LazyloadIngresso._jQueryInterface
  $.fn[NAME].Constructor = LazyloadIngresso
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return LazyloadIngresso._jQueryInterface
  }

  return LazyloadIngresso

})(jQuery)

export default LazyloadIngresso
